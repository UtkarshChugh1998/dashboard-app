export const ActionButtons = (props: any) => {
  return (
    <div className="actionContent">
      <button className="actionButton" onClick={props.buttons.onClick}>
        {props.buttons.name}
      </button>
    </div>
  )
}
