/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}
interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    // sem a utilização do immer
    // return {
    //   ...state,
    //   cycles: [...state.cycles, action.payload.newCycle],
    //   activeCycleId: action.payload.newCycle.id,
    // }

    case ActionTypes.INTERRUPTED_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })
      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
      // sem a utilização do immer
      // return {
      //   ...state,
      //   cycles: [
      //     state.cycles.map((cycles) => {
      //       if (cycles.id === state.activeCycleId) {
      //         return { ...cycles, interruptedDate: new Date() }
      //       } else {
      //         return cycles
      //       }
      //     }),
      //   ],
      //   activeCycleId: null,
      // }
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })
      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
      // método sem a utilização do immer
      // return {
      //   ...state,
      //   cycles: [
      //     state.cycles.map((cycles) => {
      //       if (cycles.id === state.activeCycleId) {
      //         return { ...cycles, finishedDate: new Date() }
      //       } else {
      //         return cycles
      //       }
      //     }),
      //   ],
      // }
    }
    default:
      return state
  }
}
