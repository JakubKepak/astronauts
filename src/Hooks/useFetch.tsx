import { useEffect, useReducer } from "react";

// TODO: types at reducer
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "idle":
      return { status: "idle", data: undefined, error: undefined };
    case "loading":
      return { status: "loading", data: undefined, error: undefined };
    case "success":
      return { status: "success", data: action.payload, error: undefined };
    case "error":
      return { status: "error", data: undefined, error: action.payload };
    default:
      throw new Error("invalid action");
  }
};

export default function useFetch(query: any) {
  const initialState = {
    status: query ? "loading" : "idle",
    data: undefined,
    error: undefined,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "loading",
    });

    return query.onSnapshot(
      (response: any) => {
        const data = response.docs
          ? getCollectionData(response)
          : getDocData(response);

        dispatch({ type: "success", payload: data });
      },
      (error: any) => {
        dispatch({ type: "error", payload: error });
      }
    );
  }, []);

  return [state.data, state.status, state.error];
}

// Get doc data and merge doc.id
function getDocData(doc: any) {
  return doc.exists === true ? { id: doc.id, ...doc.data() } : null;
}

// Get array of doc data from collection
function getCollectionData(collection: any) {
  return collection.docs.map(getDocData);
}
