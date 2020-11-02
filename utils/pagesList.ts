import {PageAccess} from "../models/enums"

export default [
  {name:"home",path:"/",access:PageAccess.All},
  {name:"login",path:"/login",access:PageAccess.OnlyUnAuth},
  {name:"signup",path:"/signup",access:PageAccess.OnlyUnAuth},
  {name:"resetLink",path:"/reset/link",access:PageAccess.OnlyUnAuth},
  {name:"resetPassword",path:"/reset/[date]/[id]",access:PageAccess.OnlyUnAuth},
  {name:"main",path:"/main",access:PageAccess.OnlyAuth},
]
