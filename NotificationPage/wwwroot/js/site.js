const checkList = async () => {
    fetch('/notification-list').then(response => response.text()).then(data => {
        displayNotification(JSON.parse(data).value)
    })
}

let notificationCardClicked = false
const displayNotification = (notifications) => {
    const container = document.getElementById('notificationContainer')
    notifications.forEach((e) => {
        const notificationItemCard = document.createElement('div')
        const privateMessage =e.action == 'private message'? `<p class="col-12">${e.source}</p>`:`<p></p>`
        notificationItemCard.classList.add('container')

        const notificationItemGrid = document.createElement('div')
        notificationItemGrid.classList.add('row')
        notificationItemGrid.classList.add('notificationCard')
        notificationItemGrid.classList.add('pt-4')
        notificationItemGrid.classList.add('pb-2')

        const htmlContent = `<p class="col-1  text-light">Img</p>
                <div class="col-10">
                    <p class="col-12 text-secondary-emphasis fs-6"><span class="nameEl">${ e.name}</span> ${e.action == 'reaction' ? 'reacted to your recent post' :
                e.action == 'followed' ? 'followed' : e.action == 'joined' ? 'has joined your group' :
                    e.action == 'private message' ? 'sent you a private message' :
                        e.action == 'commented' ? 'commented on your' :
                            e.action == 'left' ? 'left the group' :
                                'reacted to your recent post'} <span class="sourceEl">${e.action == 'private message' ? '' : e.source}</span></p>
             ${notificationCardClicked ? privateMessage : '<p></p>'}
                </div>
                `

        notificationItemGrid.innerHTML = htmlContent
        notificationItemCard.appendChild(notificationItemGrid)
        container.appendChild(notificationItemCard)

        notificationItemCard.addEventListener('click', () => {
            notificationCardClicked = true
            console.log("its clicked")
        })
    })
}
checkList()