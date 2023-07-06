
import './branches.css'


const BranchInfo = [
  {
    img : "https://i.pinimg.com/736x/bc/99/fa/bc99fa2bfa9a2d5f5a8a63de71ea9ef1--computer-jokes-computer-science.jpg" ,
    name : 'CSE' ,
    description : 'Computer Science Engineering',
    id : 1
  },
  {
    img : "https://i2.wp.com/cleus.co/wp-content/uploads/2019/03/e03d983e1f5f802e07cd7812c423bb02.jpg?resize=564%2C564&ssl=1" ,
    name : 'ECE' ,
    description : 'Electrics and Communication Engineering',
    id : 2
  },
  {
    img : "https://theawesomedaily.com/wp-content/uploads/2018/02/engineering-memes-16-1.jpg" ,
    name : 'ME' ,
    description : 'Mechanical Engineering',
    id : 3
  },
  {
    img : "https://www.memesmonkey.com/images/memesmonkey/bc/bc8085b6f8c07f37d4ea8630207e927d.jpeg" ,
    name : 'CE' ,
    description : 'Civil Engineering',
    id : 4
  }
] ; 



const Branch = (props)=>{

  // const {img , name , description , id} = props
  
  return  <a href={'/'+props.kk.name}><div className="card" key={props.kk.key}>
  <img  src = {props.kk.img} alt="Avatar" />
  <div className="container">
    <h4><b>{props.kk.name}</b></h4> 
    <p>{props.kk.description}</p> 
  </div>
</div></a> 
}



function GridExample() {
  return (
    <section className='cardList'>
      {
        BranchInfo.map((branch)=>{
          return <Branch kk = {branch} key={branch.id} />
            
        })
      }
   {/* <Branch kk = {BranchInfo[0]} key={BranchInfo[0].id}/>
   <Branch kk = {BranchInfo[1]} key={BranchInfo[1].id}/>
   <Branch kk = {BranchInfo[2]} key={BranchInfo[2].id}/> */}
    </section>
  );
}

export default GridExample;