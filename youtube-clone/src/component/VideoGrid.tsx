
import { VideoCard } from "./VideoCard"

const VIDEO=[{
    title:"How to code in 30 days| live coding with me | 30days plain" ,
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learning code in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},{
    title:"How to learn play in 30 days| live coding with me | 30days plain",
   image:"photo.png",
   thumbimage:"ytlogo.jpg",
author:"Ayush Gopal",
view:"100k",
timestamp:"3 days ago"
},]



export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 
      md:grid-cols-2 lg:grid-cols-4">
      {VIDEO.map(video => <div>
        <VideoCard
          title={video.title}
          image={video.image}
          thumbImage={video.thumbimage}
          author={video.author}
          views={video.view}
          timestamp={video.timestamp}
        ></VideoCard>
      </div>)}
    </div>
  )
}
