import React from 'react'


function LogOut() {
    localStorage.clear();
    window.history.pushState({}, '', '/')
    location.reload();
}

export default LogOut;