import { Cycle } from "./reducer";

export enum ActionTypes {
  CREATE_NEW_CYCLE = "CREATE_NEW_CYCLE",
  INTERRUPTED_CYCLE = "INTERRUPTED_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}
export function interruptedCycleAction() {
  return {
    type: ActionTypes.INTERRUPTED_CYCLE,
  };
}
export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}
