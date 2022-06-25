import { useState, createContext } from 'react';

// NoContextComponent is a nested form that controls its inputs via state that is passed down from the parent (App)
import { default as NoContextComponent } from './NoContextComponent.jsx';

// YesContextComponent is a nested form that controls its inputs via direct context consumption
import { default as YesContextComponent } from './YesContextComponent.jsx';

// Default state of the inputs in both context/non-context cases
const FIELD_VALUES = {
  inputFieldA1: '',
  inputFieldA2: '',
  inputFieldB1: '',
  inputCheckB2: false,
  clickTimestamps: []
}

// We create the context here, but we can also define and export it in another helper file.
export const fieldValuesContextObject = createContext({fieldValuesContext: FIELD_VALUES, setFieldValuesContext: () => {}});

function App() {
  let [fieldValues, setFieldValues] = useState(FIELD_VALUES);
  let [fieldValuesContext, setFieldValuesContext] = useState(FIELD_VALUES);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center m-4 md:m-16">
      <div className="col-span-full font-bold text-3xl">Stop Prop Drilling With React Context</div>

      <div className="col-span-full text-left flex flex-col gap-4">
        <div>
          Let's see how we would handle an example nested form using props only, versus using React Context. For the end user, the end result is identical in both cases: <b>you won't notice any differences when playing around with the forms</b>- but check out the code to see what a difference it can make for developers!
        </div>

        <div>
          This example codebase, and respective Hashnode post will NOT cover the mitigation of prop drilling with component composition, or object destructuring. The objective here is to draw comparisons with Context.
        </div>
      </div>

      {/* Example without context */}
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

      {/* Example with context */}
      <div className="flex flex-col gap-5">
        <fieldValuesContextObject.Provider value={{ fieldValuesContext, setFieldValuesContext }}>
          With Context
          <div className="border rounded-lg p-2 flex flex-col gap-2 yes-context-example">
            <div className="flex flex-row justify-between text-xs text-left">
              <div>PARENT</div>
              <div className="underline cursor-pointer" onClick={() => setFieldValuesContext(FIELD_VALUES)}>RESET</div>
            </div>
            <pre className='text-left'>
              {JSON.stringify(fieldValuesContext, null, 2)}
            </pre>
            <YesContextComponent fieldValues={fieldValues} setFieldValues={setFieldValues} />
          </div>
        </fieldValuesContextObject.Provider>
      </div>
    </div>
  );
}

export default App;
