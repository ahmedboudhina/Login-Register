import { REGISTER_FAIL, REGISTER_SUCCESS ,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT} from "../constants";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: JSON.parse(localStorage.getItem('user')) 
  };
const authReducer = (state=initialState,action)=>{
      switch(action.type){
          case LOGIN_SUCCESS:
          case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            localStorage.setItem('user',JSON.stringify(action.payload.user));
              return{ ...state,
                token :action.payload.token,
                user:action.payload.user,
                isAuthenticated :true,
                isLoading : false} 
            case LOGOUT: 
            case LOGIN_FAIL:     
            case REGISTER_FAIL:
                localStorage.removeItem('token') 
                return {...state,
                  isAuthenticated:false,
                    user:null,
                    token : null,
                    isLoading:false
                }    
          default:
              return state
      }
  }
  export default authReducer