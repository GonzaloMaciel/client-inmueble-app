import { UserResponse } from './user.models';
import * as fromActions from './user.actions'

export interface UserState {
  entity: UserResponse | null;
  id: string | null;
  email : string | null;
  loading: boolean | null;
  error: string | null;
}

const initialState : UserState = {
  entity: null,
  id: null,
  email: null,
  loading: null,
  error: null
}

export function reducer(state = initialState, action: fromActions.All | any): UserState{

  switch (action.type) {
    //Init
    case fromActions.Types.INIT:{
      return {...state, loading: true};
    }

    case fromActions.Types.INIT_AUTHORIZED:{
      return {...state, loading: false, entity: action.user, email: action.email, error:null};
    }

    case fromActions.Types.INIT_ERROR:{
      return {...state, loading: false, entity: null, email: null, error:action.error};
    }

    case fromActions.Types.INIT_UNAUTHORIZED:{
      return {...state, loading: false, entity: null, email: null, error:null};
    }

    //Login
    case fromActions.Types.SIGING_IN_EMAIL:{
      return {...state, loading: true, entity: null, email: null, error:null};
    }

    case fromActions.Types.SIGING_IN_EMAIL_SUCCESS:{
      return {...state, loading: false, entity: action.user, email: action.email, error:null};
    }

    case fromActions.Types.SIGING_IN_EMAIL_ERROR:{
      return {...state, loading: false, entity: null, email: null, error:action.error};
    }


    //Registro de usuario
    case fromActions.Types.SIGING_UP_EMAIL:{
      return {...state, loading: true, entity: null, email: null, error:null};
    }

    case fromActions.Types.SIGING_UP_EMAIL_SUCCESS:{
      return {...state, loading: false, entity: action.user, email: action.email, error:null};
    }

    case fromActions.Types.SIGING_UP_EMAIL_ERROR:{
      return {...state, loading: false, entity: null, email: null, error: action.error};
    }

    //Logout o salir de sesion
    case fromActions.Types.SIGING_OUT_EMAIL:{
      return {...initialState};
    }

    case fromActions.Types.SIGING_OUT_EMAIL_SUCCESS:{
      return {...initialState};
    }

    case fromActions.Types.SIGING_OUT_EMAIL_ERROR:{
      return {...state, loading: false, entity: null, email: null, error: action.error};
    }

    default:{
      return state;
    }

  }
}
