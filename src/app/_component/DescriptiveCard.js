export default function DescriptiveCard({
    icon,
    title,
    description
}){
    return (<>
    <div className="border border-secondary">
<div className= "d-flex mb-3  justify-content-center gap-40 align-items-center">
    <div>{icon}</div>
    <div className="fs-20">{title}</div>
</div>
<p className="fs-12">{description}</p>
    </div>
    </>)
}