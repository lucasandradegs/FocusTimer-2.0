import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'


export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countDown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function plusMinutes() {
    el.minutes.textContent = String(state.minutes + 5).padStart(2, "0")
    state.minutes = state.minutes + 5

    if(el.minutes.textContent > 60) {
        el.minutes.textContent = 60
        el.seconds.textContent = 0
        state.minutes = 60
        state.seconds = 0
        
        el.seconds.textContent = String(state.seconds).padStart(2, "0")
    }
}

export function minusMinutes () {
    el.minutes.textContent = String(state.minutes - 5).padStart(2, "0")
    state.minutes = state.minutes - 5
    if (el.minutes.textContent < 0) {
        el.minutes.textContent = 0
        el.seconds.textContent = 0
        state.minutes = 0
        state.seconds = 0

        el.minutes.textContent = String(state.minutes).padStart(2, "0")
        el.seconds.textContent = String(state.seconds).padStart(2, "0")
    }
}

export function toggleTree() {
    state.isMute = document.documentElement.classList.toggle('music-on-tree')
    removeOtherSoundsWhenTreeIsPlaying()
}

export function toggleRain() {
    state.isMute = document.documentElement.classList.toggle('music-on-rain')  
    removeOtherSoundsWhenRainIsPlaying()
    
}

export function toggleStore() {
    state.isMute = document.documentElement.classList.toggle('music-on-store')
    removeOtherSoundsWhenStoreisPlaying()
}

export function toggleFire() {
    state.isMute = document.documentElement.classList.toggle('music-on-fire')
    removeOtherSoundsWhenFireIsPlaying()

}

function removeOtherSoundsWhenFireIsPlaying () {
    if(state.isMute) {
        document.documentElement.classList.remove('music-on-tree')
        document.documentElement.classList.remove('music-on-rain')
        document.documentElement.classList.remove('music-on-store')
    
        sounds.florestAudio.pause()
        sounds.rainAudio.pause()
        sounds.storeAudio.pause()

        sounds.fireAudio.play()
        return
    }

    sounds.fireAudio.pause()
}

function removeOtherSoundsWhenStoreisPlaying () {
    if(state.isMute) {
        document.documentElement.classList.remove('music-on-tree')
        document.documentElement.classList.remove('music-on-rain')
        document.documentElement.classList.remove('music-on-fire')
        
        sounds.florestAudio.pause()
        sounds.rainAudio.pause()
        sounds.fireAudio.pause()

        sounds.storeAudio.play()
        return
    }

    sounds.storeAudio.pause()
}

function removeOtherSoundsWhenRainIsPlaying () {
    if(state.isMute) {
        document.documentElement.classList.remove('music-on-tree')
        document.documentElement.classList.remove('music-on-store')
        document.documentElement.classList.remove('music-on-fire')
    
        sounds.florestAudio.pause()
        sounds.storeAudio.pause()
        sounds.fireAudio.pause()
        
        sounds.rainAudio.play()
        return
    }

    sounds.rainAudio.pause()
}

function removeOtherSoundsWhenTreeIsPlaying () {
    if(state.isMute) {
        document.documentElement.classList.remove('music-on-rain')
        document.documentElement.classList.remove('music-on-store')
        document.documentElement.classList.remove('music-on-fire')
    
        sounds.rainAudio.pause()
        sounds.storeAudio.pause()
        sounds.fireAudio.pause()
        
        sounds.florestAudio.play()
        return
    }

    sounds.florestAudio.pause()
}