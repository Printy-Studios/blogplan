import toast from 'react-hot-toast';

export function toastAction(text: string, action_text: string, onActionClick: () => void) {
    toast((t) => (
        <div className='toast'>
            {text}
            <button>
                {action_text}
            </button>
        </div>
    ), {
        position: 'top-right',
        style: {
            width: '100%',
        }
    });
}