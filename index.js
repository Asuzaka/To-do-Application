import { getTime as time } from "./time.js"

const input = document.querySelector('#input')
const list = document.querySelector('#list')
const add = document.querySelector('#add')
const complete = document.querySelector('#complete')
const incomplete = document.querySelector('#incomplete')

let active = 0
let edit = false
const storage = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []

function RecoverStorage() {
    storage.forEach(task => {
        list.innerHTML += `<div class="flex justify-between p-1">
                    <p id="task-name" class="text-base ${task.status == true ? 'completed' : ''}">${task.name}</p>
                    <div class="flex items-center justify-center">
                        <p class="text-sm mr-3 text-neutral-500 ${task.status}">${task.time}</p>
                        <button class="inline-flex justify-center items-center cursor-pointer" id="edit">
                            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 494.936 494.936" xml:space="preserve" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <path
                                                d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z" />
                                            <path
                                                d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <button class="inline-flex justify-center items-center cursor-pointer" id="delete">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M6 7V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V7"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>`
    });
}

function AddTask() {
    if (input.value.trim() != '' && !edit) {
        list.innerHTML += `<div class="flex justify-between p-1">
                    <p class="text-base">${input.value}</p>
                    <div class="flex items-center justify-center">
                        <p id="task-name" class="text-sm mr-3 text-neutral-500">${time()}</p>
                        <button class="inline-flex justify-center items-center cursor-pointer" id="edit">
                            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 494.936 494.936" xml:space="preserve" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <path
                                                d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z" />
                                            <path
                                                d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <button class="inline-flex justify-center items-center cursor-pointer" id="delete">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M6 7V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V7"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>`
        storage.push({ name: `${input.value}`, time: `${time()}`, status: false })
        localStorage.setItem('list', JSON.stringify(storage))
        input.value = ''
    }
    else if (edit) {
        // Catch
    }
    else {
        document.querySelector('#error').textContent = 'input cannot be empty'
        setInterval(() => {
            document.querySelector('#error').textContent = ''
        }, 2500)
    }
}

function EditTask(adress) {
    if (input.value != '') {
        storage.forEach((each) => {
            if (each.name == adress.target.parentElement.parentElement.previousElementSibling.textContent) {
                each.name = input.value
            }
        })
        adress.target.parentElement.parentElement.previousElementSibling.textContent = input.value
        input.value = ''
        add.textContent = 'Add'
        localStorage.setItem('list', JSON.stringify(storage))
    }
    else {
        document.querySelector('#error').textContent = 'task cannot be changed to empty'
        setInterval(() => {
            document.querySelector('#error').textContent = ''
        }, 2500)
    }
}

function RemoveTask(adress) {
    storage.forEach((each, i) => {
        if (each.name == adress.target.parentElement.parentElement.previousElementSibling.textContent) {
            storage.splice(i, 1)
        }
        localStorage.setItem('list', JSON.stringify(storage))
    })
}

function Complete(adress) {
    storage.forEach((each) => {
        if (each.name == adress.target.textContent) {
            each.status == true ? each.status = false : each.status = true

            if (each.status) {
                adress.target.classList.add('completed')
            }
            else {
                adress.target.classList.remove('completed')
            }
        }
        localStorage.setItem('list', JSON.stringify(storage))
    })
}

function Show(status) {
    list.innerHTML = ''
    storage.forEach((element) => {
        if (element.status == status) {
            list.innerHTML += `<div class="flex justify-between p-1">
                    <p id="task-name" class="text-base ${element.status == true ? 'completed' : ''}">${element.name}</p>
                    <div class="flex items-center justify-center">
                        <p class="text-sm mr-3 text-neutral-500 ${element.status}">${element.time}</p>
                        <button class="inline-flex justify-center items-center cursor-pointer" id="edit">
                            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                                viewBox="0 0 494.936 494.936" xml:space="preserve" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <path
                                                d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z" />
                                            <path
                                                d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <button class="inline-flex justify-center items-center cursor-pointer" id="delete">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M6 7V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V7"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>`
        }
        else {

        }
    })
}

add.addEventListener('click', () => {
    AddTask()
})

input.addEventListener('keydown', (enter) => {
    if (enter.key == 'Enter') {
        AddTask()
    }
})

list.addEventListener('click', (e) => {
    if (e.target.parentElement.id == 'edit') {
        input.value = e.target.parentElement.parentElement.previousElementSibling.textContent
        edit = true
        add.textContent = 'Save'
        add.addEventListener('click', () => {
            EditTask(e)
        })
        input.addEventListener('keydown', (enter) => {
            if (enter.key == 'Enter') {
                EditTask(e)
            }
        })
    }
    else if (e.target.parentElement.id == 'delete') {
        RemoveTask(e)
        e.target.parentElement.parentElement.parentElement.remove()
    }
    else if (e.target.id == 'task-name') {
        Complete(e)
    }
    else {
        // catch error
    }
})
complete.addEventListener('click', () => {
    if (active == 0 || active == 1) {
        complete.classList.toggle('ud')
        if (complete.classList == ('ud')) {
            Show(true)
            active = 1
        }
        else {
            list.innerHTML = ''
            RecoverStorage()
            active = 0
        }
    }
})
incomplete.addEventListener('click', () => {
    if (active == 0 || active == 2) {
        incomplete.classList.toggle('ud')
        if (incomplete.classList == ('ud')) {
            Show(false)
            active = 2
        }
        else {
            list.innerHTML = ''
            RecoverStorage()
            active = 0
        }
    }
})
RecoverStorage()