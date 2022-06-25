// Without using context, we can find ourselves in a "prop drilling" nightmare!
// Notice how we're passing fieldValues and setFieldValues down through many levels! That's alot of repetition...
// App.js -> NoContextComponent -> SubComponentA + SubComponentB + (SubComponentC -> AddTimestampButton)
function NoContextComponent ({ fieldValues, setFieldValues }) {
    return (
        <>
            <SubComponentA fieldValues={fieldValues} setFieldValues={setFieldValues} />
            <SubComponentB fieldValues={fieldValues} setFieldValues={setFieldValues} />
            <SubComponentC fieldValues={fieldValues} setFieldValues={setFieldValues} />
        </>
    )
}

function SubComponentA ({ fieldValues, setFieldValues }) {
    return (
        <div className="flex flex-col gap-4 p-2 border rounded-lg no-context-example font-mono">
            <div className="text-left text-xs">SubComponentA</div>

            <div className="flex flex-row gap-2">
                Input A1:
                <input
                    className="px-2 flex-grow"
                    type="text"
                    value={fieldValues.inputFieldA1}
                    onChange={e => setFieldValues({ ...fieldValues, inputFieldA1: e.target.value })}
                />
            </div>

            <div className="flex flex-row gap-2">
                Input A2:
                <input
                    className="px-2 flex-grow"
                    type="text"
                    value={fieldValues.inputFieldA2}
                    onChange={e => setFieldValues({ ...fieldValues, inputFieldA2: e.target.value })}
                />
            </div>
        </div>
    )
}

function SubComponentB ({ fieldValues, setFieldValues }) {
    return (
        <div className="flex flex-col gap-4 p-2 border rounded-lg no-context-example font-mono">
            <div className="text-left text-xs">SubComponentB</div>

            <div className="flex flex-row gap-2">
                Input B1:
                <input
                    className="px-2 flex-grow"
                    type="text"
                    value={fieldValues.inputFieldB1}
                    onChange={e => setFieldValues({ ...fieldValues, inputFieldB1: e.target.value })}
                />
            </div>

            <div className="flex flex-row gap-2 items-center">
                Input B2:
                <input
                    type="checkbox"
                    checked={fieldValues.inputCheckB2}
                    onChange={() => setFieldValues({ ...fieldValues, inputCheckB2: !fieldValues.inputCheckB2 })}
                />
            </div>
        </div>
    )
}

// For AddTimestampButton, we pass the state through SubComponentC even though it doesn't use anything from the state!
function SubComponentC ({ fieldValues, setFieldValues }) {
    return (
        <div className="flex flex-col gap-4 p-2 border rounded-lg no-context-example font-mono">
            <div className="text-left text-xs">SubComponentC</div>

            <div className="flex flex-col gap-2">
                I'm a part of component C!
                <AddTimestampButton fieldValues={fieldValues} setFieldValues={setFieldValues} />
            </div>
        </div>
    )
}

// fieldValues and setFieldValues have travelled through many levels just to get here to be used!
// App.js (parent) -> NoContextComponent -> SubComponentC -> AddTimestampButton
function AddTimestampButton ({ fieldValues, setFieldValues }) {
    return (
        <div className="flex flex-col gap-4 p-2 border rounded-lg no-context-example font-mono">
            <div className="text-left text-xs">AddTimestampButton</div>

            <div className="flex flex-col gap-2">
                <button
                    className="cursor-pointer underline"
                    onClick={() => {
                        const newTimeStamp = new Date();
                        setFieldValues({ ...fieldValues, clickTimestamps: [...fieldValues.clickTimestamps, newTimeStamp] })
                    }}
                >
                    Add Timestamp ({fieldValues.clickTimestamps.length})
                </button>
            </div>
        </div>
    )
}

export default NoContextComponent;