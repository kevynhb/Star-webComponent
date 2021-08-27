class StarRater extends HTMLElement {
  constructor() {
    super()

    this.build()
  }

  build() {
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.appendChild(this.styles())

    const rater = this.createRater()
    const stars = this.createStars()

    stars.forEach(star => rater.appendChild(star))

    shadow.appendChild(rater)
  }

  createRater() {
    const rater = document.createElement('div')
    rater.classList.add('star-rater')

    return rater
  }

  createStars() {
    const createStar = (_, id) => {
      const star = document.createElement('span')
      star.classList.add('star')
      star.setAttribute('data-value', Number(id) + 1)
      star.innerHTML = '&#9733;'

      star.addEventListener('mouseover', this.setRating.bind(this))

      return star
    }

    return Array.from({ length: 5 }, createStar)
  }

  setRating(event) {
    console.log(this)
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = `
    .star{
      font-size: 5rem;
      color: gray;
      cursor: pointer;
    }
    `

    return style
  }
}

customElements.define('star-rater', StarRater)
