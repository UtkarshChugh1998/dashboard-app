import us_img from '../../public/us_flag.png'
export const OrganizationDetails = () => {
  return (
    <div className="organizationContainer">
      <div className="details">
        <div className="orgHeading">Organization</div>
        <div className="orgName">ENM</div>
      </div>
      <div>
        <img className="image" src={us_img} />
      </div>
    </div>
  )
}
