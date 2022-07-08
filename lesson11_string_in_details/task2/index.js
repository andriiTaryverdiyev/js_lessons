const sortContacts = (contacts, value) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    const result = contacts.sort((a, b) => {
        if (value == false) {
            return b.name.localeCompare(a.name)
        }
        return a.name.localeCompare(b.name)
    })
    return result
}