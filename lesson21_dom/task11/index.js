export function manageClasses() {
    let one = document
        .querySelector('.one')
    one.className = `one selected`;

    let two = document
        .querySelector('.two')
    two.className = `two`;

    let three = document
        .querySelector('.three')
    three.classList.toggle('three_done');

    let four = document
        .querySelector('.four')
    if (four.className.includes('some-class')) {
        four.classList.toggle('some-class')
        four.classList.toggle('another-class');
    }
}