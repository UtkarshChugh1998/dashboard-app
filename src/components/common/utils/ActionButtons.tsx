export const ActionButtons = (props: any) => {
  return (
    <div className="actionContent">
      <button className="actionButton" onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  )
}
