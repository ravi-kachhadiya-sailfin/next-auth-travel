import GallerySection from "../components/destination/destination-section"

const destinations = [{
  title: 'New Zealand',
  description: 'New Zealand is an island country in the',
  image: '/assets/destinations/NZ-thumbnail.jpg',
  continent: 'oceania'
}, {
  title: 'New Zealand',
  description: 'New Zealand is an island country in the',
  image: '/assets/destinations/NZ-thumbnail.jpg',
  continent: 'oceania'
}, {
  title: 'New Zealand',
  description: 'New Zealand is an island country in the',
  image: '/assets/destinations/NZ-thumbnail.jpg',
  continent: 'oceania'
}, {
  title: 'New Zealand',
  description: 'New Zealand is an island country in the',
  image: '/assets/destinations/NZ-thumbnail.jpg',
  continent: 'oceania'
}, {
  title: 'New Zealand',
  description: 'New Zealand is an island country in the',
  image: '/assets/destinations/NZ-thumbnail.jpg',
  continent: 'oceania'
}, {
  title: 'New Zealand',
  description: 'New Zealand is an island country in the',
  image: '/assets/destinations/NZ-thumbnail.jpg',
  continent: 'oceania'
}, {
  title: 'New Zealand',
  description: 'New Zealand is an island country in the',
  image: '/assets/destinations/NZ-thumbnail.jpg',
  continent: 'oceania'
}, {
  title: 'New Zealand',
  description: 'New Zealand is an island country in the',
  image: '/assets/destinations/NZ-thumbnail.jpg',
  continent: 'oceania'
}, {
  title: 'New Zealand',
  description: 'New Zealand is an island country in the',
  image: '/assets/destinations/NZ-thumbnail.jpg',
  continent: 'oceania'
},]

const Gallery = () => {
  return (
    <GallerySection title={"Gallery"} data={destinations} />
  )
}

export default Gallery