import './bootstrap';
import{Button,Modal,TitleBar} from '@shopify/app-bridge/actions'
const app = window.app
const actions=window.actions

const okButton = Button.create(app, {label:'OK'})
const cancelButton =Button.create(app, {label:'Cancel'})
const titleBarOptions={
    title: 'Video Shop',
};
const myTitleBar = TitleBar.create(app,titleBarOptions);

const modalOptions ={
    title:'Video shop Modal',
    message:'Hellow world modal',
    footer:{
        buttons:{
            primary:okButton,
            secondary:[cancelButton]
        }
    }
};

const myModal = Modal.create(app, modalOptions);
myModal.dispatch(Modal.Action.OPEN);

cancelButton.subscribe(Button.Action.CLICK,()=>{
    myModal.dispatchactions(Modal.Action.CLOSE);
});

okButton.subscribe(Button.Action.CLICK,()=>{

    window.axios.get('/me').then(response=>console.log(response))

})