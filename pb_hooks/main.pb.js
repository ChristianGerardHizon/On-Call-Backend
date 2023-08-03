routerAdd("GET", "/hello/:name", (c) => {
    let name = c.pathParam("name")

    return c.json(200, { "message": "Hello " + name })
})

routerAdd("GET", "/phone-login", (c) => {
    try {
        const data = new DynamicModel({
            phone: "",
            password: "",
        })

        c.bind(data)

        const record = $app.dao().findFirstRecordByData("users", "phone", data.phone)

        if (record === null) {
            throw new BadRequestError("account not available")
        }
        if (!record.validatePassword(data.password)) {
            throw new BadRequestError("invalid credentials")
        }
    } catch (error) {
        throw new BadRequestError("invalid credentials")
    }

    return $apis.recordAuthResponse($app, c, record)
}, $apis.activityLogger($app))

routerAdd("GET", "/email-test", (c) => {
    const message = new MailerMessage({
        from: {
            address: $app.settings().meta.senderAddress,
            name:    $app.settings().meta.senderName,
        },
        to:      [{address: 'christiangerardhizon@gmail.com'}],
        subject: "YOUR_SUBJECT...",
        html:    "YOUR_HTML_BODY...",
        // bcc, cc and custom headers are also supported...
    })

    $app.newMailClient().send(message)
    return c.json(200, { "email ": "sent" })

}, $apis.activityLogger($app))
