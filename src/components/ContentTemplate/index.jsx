
import StyledContentTemplate from "./style"

export default function ContentTemplate({children}){
  return (
    <StyledContentTemplate className="container">
      {children}
    </StyledContentTemplate>
  )
}