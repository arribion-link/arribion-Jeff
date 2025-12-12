import Stacks from "../../constants/Stack"
const Stack = () => {
  return (
    <>
      <section className="flex justify-center my-[7em]">
          <div className="flex flex-wrap gap-2 items-stretch animate-pulse">
          {
            Stacks.map((stack) => (    
              <div key={stack.id}
                className="border border-slate-600/35 rounded-2xl p-3 flex justify-center items-center"
              >
                <h2 className="font-bold"> { stack.stack }</h2>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Stack
