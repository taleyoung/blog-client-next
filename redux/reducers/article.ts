import { Action } from "utils/createAction";

import { Article } from "../../typings/store";
import * as actionTypes from "../action-types";

let initState: Article = {
  articleList: { total: 0, data: [] },
  articleDetail: {
    id: 1,
    title: "",
    content: "",
    tags: [],
    category: "",
    updatedAt: ""
  }
};

export default function article(state = initState, action: Action): Article {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_ARTICLE_LIST:
      return {
        ...state,
        articleList: { total: payload.total, data: payload.data }
      };
    case actionTypes.GET_ARTICLE_DETAIL:
      return { ...state, articleDetail: payload };
    case actionTypes.UPDATE_ARTICLE_DETAIL:
      return { ...state, articleDetail: payload };
    case actionTypes.ADD_ARTICLE:
      return { ...state, articleDetail: payload };
    case actionTypes.DELETE_ARTICLE:
      return {
        ...state,
        articleList: { total: payload.total, data: payload.data }
      };
    default:
      return initState;
  }
}
