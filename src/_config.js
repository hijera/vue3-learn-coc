export const process ={
    dev: true,

};

export const site  = {
    home: process.dev ? 'home' : 'nohome'
}
export const title = 'tmpl';

export const links = [{title:'home',url:'/',alias:'hme'},{title:'about',url:'/about',alias:'About'}];

export const app = {
    title: 'tmpl'
}