import Split from 'react-split';

export const Editor = () => {
    return (
        <Split direction='vertical' style={{height: 'calc(100vh - 4rem)'}}>
            <div className ='bg-gray-400'></div>
            <div className='bg-gray-500'></div>
        </Split>
    )
}