import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

import config from "@/config/config"
import { useAppStore } from '../store/app';

import ScaleControls from '../components/Shared/ScaleControls';
import Panel from '../components/FloorPlanEditor/Panel';
import GridControls from '../components/Shared/GridControls';
import TopBar from '../components/FloorPlanEditor/TopBar';
import usePlan from '../hooks/usePlan';
import useDebounce from '../hooks/useDebounce';
import WallDrawing from '../components/FloorPlanEditor/WallDrawing'
import TextEditing from '../components/FloorPlanEditor/TextEditing'
import Walls from '../components/FloorPlanEditor/Walls'
import Items from '../components/FloorPlanEditor/Items'
import SVGViewport from '../components/Shared/SVGViewport'
import Grid from '../components/Shared/Grid';

import { NotificationProvider} from "../context/NotificationContext"
import LoadingPlan from '../components/Shared/LoadingPlan';
import PropertyPanel from '../components/FloorPlanEditor/PropertyPanel';

const FloorPlanEditor = () => {

  // Get plan ID from the url
  const { planId } = useParams()

  // Get grid state and fit function
  const showGrid = useAppStore((state) => state.showGrid)
  const setEditorProp = useAppStore((state) => state.setEditorProp)
  const fitView = useAppStore((state) => state.fitView)

  // Track the initial run
  const [initialRun, setInitialRun] = useState(true)

  // Config
  const gridSize = config.gridSize
  const gridArea = config.gridArea

  // Get plan from API using usePlan hook
  const {plan, addWalls, addItem, updatePlanDetails, updateItem, removeItem, removeWalls, updateWalls, loading, error} = usePlan(planId)

  // Set initial size for svg - full window width and height
  const [svgDimension, setSvgDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const debounceResize = useDebounce(setSvgDimension, 300)

  // Update width and height after window resize with debounce to optimize performance
  const handleResize = () => {
    debounceResize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    // Listen for window resize
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      // Reset scale and translate 
      // In future store this as a viewSettings in each plan
      setEditorProp('scale', 1)
      setEditorProp('translate', {x:0,y:0})
      setEditorProp('activeElement', null)
      setEditorProp('textEditing', false)
    }
  },[])

  useEffect(() => {
    // We need to wait for a plan and only run fitView once at the begining
    if(plan && initialRun) {
      fitView(plan.walls)
      setInitialRun(false)
    }
  }, [plan])

  if (loading) return <LoadingPlan />;
  if (error) return <div className='bg-red-100 p-2 text-sm rounded'>There was an error: <span className='text-red-500'>{error.message}</span></div>;

  return (
    <div className='relative bg-white select-none'>
      <NotificationProvider>
        <Panel addItem={addItem}/>
        <PropertyPanel plan={plan} removeItem={removeItem} removeWalls={removeWalls} />
        <TextEditing items={plan.items} updateItem={updateItem}/>
        <SVGViewport width={svgDimension.width} height={svgDimension.height} mode="editor">
          {showGrid && <Grid width={svgDimension.width} height={svgDimension.height} gridSize={gridSize} gridArea={gridArea} />}
          {!initialRun && 
          <>
            <Walls walls={plan.walls} removeWalls={removeWalls} updateWalls={updateWalls}/>
            <Items items={plan.items} updateItem={updateItem} removeItem={removeItem}/>
          </>}
          <WallDrawing addWalls={addWalls}/>  
        </SVGViewport>
        <ScaleControls walls={plan.walls} width={svgDimension.width} height={svgDimension.height}/>
        <TopBar plan={plan} updatePlan={updatePlanDetails}/>
        <GridControls/>
      </NotificationProvider>
    </div>
  )
}

export default FloorPlanEditor