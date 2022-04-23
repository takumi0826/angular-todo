import { createFeatureSelector, createSelector } from '@ngrx/store'
import { taskFeatureKey, TaskState } from './task.reducers'

const getState = createFeatureSelector<TaskState>(taskFeatureKey)

export const getLoading = createSelector(getState, (state) => state.isLoading)

export const getTasks = createSelector(getState, (state) => state.tasks)
