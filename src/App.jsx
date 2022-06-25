import { useState, createContext } from 'react';
import { default as NoContextComponent } from './NoContextComponent.jsx';

const FIELD_VALUES = {
  inputFieldA1: '',
  inputFieldA2: '',
  inputFieldB1: '',
  inputCheckB2: false,
  clickTimestamps: []
}

function App() {
  let [fieldValues, setFieldValues] = useState(FIELD_VALUES);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center m-4 md:m-16">
      <div className="col-span-full font-bold text-3xl">Stop Prop Drilling With React Context</div>

      <div className="col-span-full text-left flex flex-col gap-4">
        <div>
          Consider the following JSON object that contains the values of various fields in a relatively nested form:
        </div>

        <div>Let's see how we would pass this down and handle changes using props only, versus using React Context.</div>
        <div>
          For the end user, the end result is identical in both cases: <b>you won't notice any differences when playing around with the forms</b>- but check out the code to see what a difference it can make for developers!
        </div>
      </div>

      <div className="flex flex-col gap-5">
        Without Context
        <div className="border rounded-lg p-2 flex flex-col gap-2 no-context-example">
          <div className="flex flex-row justify-between text-xs text-left">
            <div>PARENT</div>
            <div className="underline cursor-pointer" onClick={() => setFieldValues(FIELD_VALUES)}>RESET</div>
          </div>
          <pre className='text-left'>
            {JSON.stringify(fieldValues, null, 2)}
          </pre>
          <NoContextComponent fieldValues={fieldValues} setFieldValues={setFieldValues} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        With Context
        <div className="border rounded-lg p-2 flex flex-col yes-context-example">
          <div className="text-xs text-left">PARENT</div>
          hi
        </div>
      </div>
    </div>
  );
}

export default App;
