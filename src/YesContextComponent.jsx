// Import useContext and the context object we made at the parent level
import { useContext } from 'react';
import { fieldValuesContextObject } from './App';

// Notice that there are no more props being passed down to any descendants!
function YesContextComponent () {
    return (
        <>
            <SubComponentA />
            <SubComponentB />
            <SubComponentC />
        </>
    )
}

function SubComponentA () {
    const {fieldValuesContext, setFieldValuesContext} = useContext(fieldValuesContextObject);

    return (
        <div className="flex flex-col gap-4 p-2 border rounded-lg yes-context-example font-mono">
            <div className="text-left text-xs">SubComponentA</div>

            <div className="flex flex-row gap-2">
                Input A1:
                <input
                    className="px-2 flex-grow"
                    type="text"
                    value={fieldValuesContext.inputFieldA1}
                    onChange={e => setFieldValuesContext({ ...fieldValuesContext, inputFieldA1: e.target.value })}
                />
            </div>

            <div className="flex flex-row gap-2">
                Input A2:
                <input
                    className="px-2 flex-grow"
                    type="text"
                    value={fieldValuesContext.inputFieldA2}
                    onChange={e => setFieldValuesContext({ ...fieldValuesContext, inputFieldA2: e.target.value })}
                />
            </div>
        </div>
    )
}

function SubComponentB () {
    const {fieldValuesContext, setFieldValuesContext} = useContext(fieldValuesContextObject);

    return (
        <div className="flex flex-col gap-4 p-2 border rounded-lg yes-context-example font-mono">
            <div className="text-left text-xs">SubComponentB</div>

            <div className="flex flex-row gap-2">
                Input B1:
                <input
                    className="px-2 flex-grow"
                    type="text"
                    value={fieldValuesContext.inputFieldB1}
                    onChange={e => setFieldValuesContext({ ...fieldValuesContext, inputFieldB1: e.target.value })}
                />
            </div>

            <div className="flex flex-row gap-2 items-center">
                Input B2:
                <input
                    type="checkbox"
                    checked={fieldValuesContext.inputCheckB2}
                    onChange={() => setFieldValuesContext({ ...fieldValuesContext, inputCheckB2: !fieldValuesContext.inputCheckB2 })}
                />
            </div>
        </div>
    )
}

// Unlike NoContextComponent, since SubComponentC doesn't need to have any props!
function SubComponentC () {
    return (
        <div className="flex flex-col gap-4 p-2 border rounded-lg yes-context-example font-mono">
            <div className="text-left text-xs">SubComponentC</div>

            <div className="flex flex-col gap-2">
                I'm a part of component C!
                <AddTimestampButton />
            </div>
        </div>
    )
}

// We consume the context directly in the components that need it. No more drilling!
function AddTimestampButton () {
    const {fieldValuesContext, setFieldValuesContext} = useContext(fieldValuesContextObject);

    return (
        <div className="flex flex-col gap-4 p-2 border rounded-lg yes-context-example font-mono">
            <div className="text-left text-xs">AddTimestampButton</div>

            <div className="flex flex-col gap-2">
                <button
                    className="cursor-pointer underline"
                    onClick={() => {
                        const newTimeStamp = new Date();
                        setFieldValuesContext({ ...fieldValuesContext, clickTimestamps: [...fieldValuesContext.clickTimestamps, newTimeStamp] })
                    }}
                >
                    Add Timestamp ({fieldValuesContext.clickTimestamps.length})
                </button>
            </div>
        </div>
    )
}

export default YesContextComponent;