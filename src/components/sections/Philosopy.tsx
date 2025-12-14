
import CircularText from '../ui/CircularText';

const Philosopy = () => {
  return (
    <>
      <section className="flex justify-center m-4">
        <div className="grid md:grid-cols-2 items-center">
          <div>
            <h1 className="font-bold text-center md:text-4xl text-slate-400">
              SOTWARE ENGINEER
            </h1>
            <h1 className='p-4 font-bold'> The Unique Advantage</h1>
            <p className='text-center md:text-start mb-4'>
              My ability to operate effectively across both design and
              development domains allows me to bridge the common gap between
              these disciplines. I can translate design concepts into feasible
              technical implementations and inform design decisions with an
              understanding of technical constraints and possibilities, leading
              to smoother workflows and better end products.
            </p>
          </div>
          <CircularText
            text="JEFF * MUTETHIA * ARRIBION * CODNIFY.DEV * "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class text-yellow-300"
          />
        </div>
      </section>
    </>
  );
}

export default Philosopy
