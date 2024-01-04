import Slots from './Slots';

export default function SlotsRoll() {
    const slotsItems =['🍎','🍐','🍊','🍋','🍌','🍆','🍒','🍑']
    function randomize(){
        return Math.floor(Math.random() * slotsItems.length)
    }
  return (
    <div>
        <Slots val1={slotsItems[randomize()]} val2={slotsItems[randomize()]} val3={slotsItems[randomize()]}/>
    </div>
  )
}
