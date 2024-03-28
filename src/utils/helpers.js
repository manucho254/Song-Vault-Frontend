
function fetchDuration(path) {
    return new Promise((resolve) => {
      const audio = new Audio()
      audio.src = path
      audio.addEventListener('loadedmetadata', () => {
        // To keep a promise maintainable, only do 1
        // asynchronous activity for each promise you make
        resolve(audio.duration)
      })
    })
}
  
function formatDuration(duration) {
    const minutes = `${Math.floor(duration / 60)}`.padStart(2, '0')
    const seconds = `${duration - minutes * 60}`.padStart(2, '0')
    return `${minutes}:${seconds}`
}


function processSongs (songs){
    for (let song of songs) {
      fetchDuration(`http://127.0.0.1:8000/${song.song_media[0].file}`).then(
        (duration) => {
          song['duration'] = formatDuration(Math.floor(duration))
        }
      )
    }
    return songs
}

export default (fetchDuration, formatDuration, processSongs)
