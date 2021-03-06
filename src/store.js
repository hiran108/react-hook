import create from 'zustand'
import producer from 'immer'

const baseMember = { 
    
        Name:"Hiran",
        age:35
    

}

const [useMemberStore] = create(set => ({ 
    count: 0,
    name:"test",
    items:["test1","test2"],
    member:baseMember,
    members:[],
  increase: (i) =>  set(state =>producer(state,df=>{
      df.member.age=df.member.age+i;
      df.count = df.count+i;

}))  ,
  reset: () => set({ count: 0, name:"test rebump", member:baseMember }),
  addItem:(item)=>set(state =>producer(state,df=>{df.items.push(item)})) ,
  saveMember: (name)=>
      set(state =>producer(state,df=>{df.member.Name=name}))   ,
  
}))

export default useMemberStore;