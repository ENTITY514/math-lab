import * as PIXI from "pixi.js"
import { Transform } from "../components/Transform/transform_component";
import { Primitive } from "./primitive";
import { Vector2 } from "../../../Types/math_types";
import { Component } from "../components/component";
import { ParticleSystemSettingsComponent } from "../components/ParticleSystemSettings/particle_system_settings";
import { GraphicsComponent } from "../components/Graphic/graphic_component";
import { ObjectTypes } from "../../../Types/object_types";

interface Particle {
    particle: PIXI.Sprite
    speed: Vector2
    size: number
    life_time: number
}

export class ParticleSystem extends Primitive {
    display_object: PIXI.Sprite
    particle_container: PIXI.ParticleContainer
    particle_count: number
    max_speed: number
    min_speed: number
    life_time: number
    max_size: number
    min_size: number
    particles: Array<Particle>
    transform: Transform
    components: Array<Component>
    tick: number
    constructor(
        name: string = "ParticleSystem",
        particle_count: number,
        max_speed: number,
        min_speed: number,
        life_time: number,
        max_size: number,
        min_size: number,
    ) {
        super(name, ObjectTypes.PARTICLESYSTEM)
        this.particle_count = particle_count
        this.max_size = max_size
        this.min_size = min_size
        this.max_speed = max_speed
        this.min_speed = min_speed
        this.life_time = life_time
        this.particles = []
        this.components = []
        this.tick = 1
        this.transform = new Transform(this)
        new ParticleSystemSettingsComponent(this)
        this.display_object = PIXI.Sprite.from(PIXI.Texture.WHITE)
        this.particle_container = new PIXI.ParticleContainer(this.particle_count, {
            scale: true,
            position: true,
            rotation: true,
            uvs: true,
            alpha: true,
        });
        this.display_object.addChild(this.particle_container)
        this.create_particles()
    }

    create_particles() {
        for (let i = 0; i < this.particle_count; ++i) {
            let sprite = PIXI.Sprite.from(PIXI.Texture.WHITE);
            let speed = {
                x: this.min_speed + Math.random() * this.max_speed * 2 - this.max_speed,
                y: this.min_speed + Math.random() * this.max_speed * 2 - this.max_speed
            }
            let size = this.min_size + Math.random() * this.max_size
            sprite.width *= size
            sprite.height *= size
            this.particles.push({ particle: sprite, speed, size, life_time: this.life_time })
            sprite.tint = Math.random() * 0xffffff;
            this.display_object.addChild(sprite)
        }
    }

    clearSystem() {
        for (let i = 0; i < this.particle_count; ++i) {
            this.display_object.removeChildren()
        }
    }

    updateSystem() {
        this.clearSystem()
        this.create_particles()
    }

    update() {
        this.tick += 0.01
        for (let i = 0; i < this.particles.length; i++) {
            var vx = Math.cos(this.tick) * this.particles[i].speed.x;
            var vy = Math.sin(this.tick) * this.particles[i].speed.y;
            this.particles[i].particle.position.x += vx
            this.particles[i].particle.position.y += vy
        }
    }
}