import { ThunkAction } from "redux-thunk"
import { RootState } from "@/state/reducers"
import { Action } from "redux"
import { AppActionsTypes } from "@/state/types/app.types"
import API from "@/utils/API"
import { authRefresh } from "@/state/actions/auth.actions"
import { appSetMessage } from "@/state/actions/app.actions"
import {
  BoardActionTypes,
  BoardChangeDonePayload,
  BoardChangeStartPayload,
  BoardCreateDone,
  BoardCreateStartPayload,
  BoardDeleteDonePayload,
  BoardDeleteStartPayload,
  BoardGetAllDonePayload,
  BoardGetAllStartPayload,
  BoardGetDonePayload,
  BoardGetStartPayload,
  CardChangeDonePayload,
  CardChangeStartPayload,
  CardCreateDonePayload,
  CardCreateStartPayload,
  CardDeleteDonePayload,
  CardDeleteStartPayload,
  CardGetDonePayload,
  CardGetStartPayload,
  ListChangeDonePayload,
  ListChangeStartPayload,
  ListCreateDonePayload,
  ListCreateStartPayload,
  ListDeleteDonePayload,
  ListDeleteStartPayload,
  ListGetDonePayload,
  ListGetStartPayload,
} from "@/state/types/board.types"

//Board
export const boardGetStart = (
  payload: BoardGetStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.getBoard(payload.id, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: boardGetStart, data: payload }))
      } else {
        dispatch(boardGetDone(result))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const boardGetDone = (payload: BoardGetDonePayload) => ({
  type: BoardActionTypes.BOARD_GET_DONE,
  payload,
})

export const boardGetAllStart = (
  payload: BoardGetAllStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.getAllBoards(payload.userId, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: boardGetAllStart, data: payload }))
      } else {
        dispatch(boardGetAllDone(result))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const boardGetAllDone = (payload: BoardGetAllDonePayload) => ({
  type: BoardActionTypes.BOARD_GET_ALL_DONE,
  payload,
})

export const boardChangeStart = (
  payload: BoardChangeStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.changeBoard(payload.board, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: boardChangeStart, data: payload }))
      } else {
        dispatch(boardChangeDone(result))
        dispatch(appSetMessage({ message: "Board changed", type: "info" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const boardChangeDone = (payload: BoardChangeDonePayload) => ({
  type: BoardActionTypes.BOARD_CHANGE_DONE,
  payload,
})

export const boardCreateStart = (
  payload: BoardCreateStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.createBoard(payload.board, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: boardCreateStart, data: payload }))
      } else {
        dispatch(boardCreateDone(result))
        dispatch(appSetMessage({ message: "Board created", type: "success" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const boardCreateDone = (payload: BoardCreateDone) => ({
  type: BoardActionTypes.BOARD_CREATE_DONE,
  payload,
})

export const boardDeleteStart = (
  payload: BoardDeleteStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.deleteBoard(payload.id, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: boardDeleteStart, data: payload }))
      } else {
        dispatch(boardDeleteDone(result))
        dispatch(appSetMessage({ message: "Board deleted", type: "warning" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const boardDeleteDone = (payload: BoardDeleteDonePayload) => ({
  type: BoardActionTypes.BOARD_DELETE_DONE,
  payload,
})

//List
export const listGetStart = (
  payload: ListGetStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.getList(payload.id, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: listGetStart, data: payload }))
      } else {
        dispatch(listGetDone(result))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const listGetDone = (payload: ListGetDonePayload) => ({
  type: BoardActionTypes.LIST_GET_DONE,
  payload,
})

export const listChangeStart = (
  payload: ListChangeStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.changeList(payload.list, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: listChangeStart, data: payload }))
      } else {
        dispatch(listChangeDone(result))
        dispatch(appSetMessage({ message: "List changed", type: "info" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const listChangeDone = (payload: ListChangeDonePayload) => ({
  type: BoardActionTypes.LIST_CHANGE_DONE,
  payload,
})

export const listCreateStart = (
  payload: ListCreateStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.createList(payload.list, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: listCreateStart, data: payload }))
      } else {
        dispatch(listCreateDone(result))
        dispatch(appSetMessage({ message: "List created", type: "success" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const listCreateDone = (payload: ListCreateDonePayload) => ({
  type: BoardActionTypes.LIST_CREATE_DONE,
  payload,
})

export const listDeleteStart = (
  payload: ListDeleteStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.deleteList(payload.id, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: listDeleteStart, data: payload }))
      } else {
        dispatch(listDeleteDone(result))
        dispatch(appSetMessage({ message: "List deleted", type: "warning" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const listDeleteDone = (payload: ListDeleteDonePayload) => ({
  type: BoardActionTypes.LIST_DELETE_DONE,
  payload,
})

//Card
export const cardGetStart = (
  payload: CardGetStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.getCard(payload.id, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: cardGetStart, data: payload }))
      } else {
        dispatch(cardGetDone(result))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const cardGetDone = (payload: CardGetDonePayload) => ({
  type: BoardActionTypes.CARD_GET_DONE,
  payload,
})

export const cardChangeStart = (
  payload: CardChangeStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.changeCard(payload.card, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: cardChangeStart, data: payload }))
      } else {
        dispatch(cardChangeDone(result))
        dispatch(appSetMessage({ message: "Card changed", type: "info" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const cardChangeDone = (payload: CardChangeDonePayload) => ({
  type: BoardActionTypes.CARD_CHANGE_DONE,
  payload,
})

export const cardCreateStart = (
  payload: CardCreateStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.createCard(payload.card, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: cardCreateStart, data: payload }))
      } else {
        dispatch(cardCreateDone(result))
        dispatch(appSetMessage({ message: "Card created", type: "success" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const cardCreateDone = (payload: CardCreateDonePayload) => ({
  type: BoardActionTypes.CARD_CREATE_DONE,
  payload,
})

export const cardDeleteStart = (
  payload: CardDeleteStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<BoardActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(boardLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.deleteCard(payload.id, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: cardDeleteStart, data: payload }))
      } else {
        dispatch(cardDeleteDone(result))
        dispatch(appSetMessage({ message: "Card deleted", type: "warning" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(boardEnding)
    }
  }
}

export const cardDeleteDone = (payload: CardDeleteDonePayload) => ({
  type: BoardActionTypes.CARD_DELETE_DONE,
  payload,
})

export const boardLoading = () => ({
  type: BoardActionTypes.BOARD_LOADING,
})

export const boardEnding = () => ({
  type: BoardActionTypes.BOARD_ENDING,
})
