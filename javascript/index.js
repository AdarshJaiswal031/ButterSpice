//------ SEC-1
an.animateFromBottom("#sec-1-welcome");
an.animateScale("#sec-1-best");
an.animateFromBottom("#sec-1-proper", { delay: 0.8 });
an.animateFromBottom("#sec-1-view-btn", { delay: 1 });

const menu = document.getElementById("sec-6-menu-1");
const menuChildren = menu.children
Array.from(menuChildren).forEach((item) => {
    const drawerLi = item.children[0];
    const element = drawerLi.children[1];

    an.drawer(drawerLi, element)
})
