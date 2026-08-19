// Tatraapi Sound Engine — Refined Interactive Navbar & UI Audio
// Sound starts strictly OFF by default.
// When toggled ON, hovering over Navbar links plays the elegant glass harmonic tone.
// When toggled OFF, all sound is muted instantly.

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = false;

  private initContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    return this.ctx;
  }

  /**
   * Toggle sound ON/OFF
   * Returns the new sound state (true = ON, false = OFF)
   */
  public async toggle(): Promise<boolean> {
    if (this.isEnabled) {
      this.stop();
      this.isEnabled = false;
      return false;
    } else {
      this.isEnabled = true;
      const ctx = this.initContext();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }
      // Play a soft pleasant bell tone to confirm sound is active
      this.playConfirmChime();
      return true;
    }
  }

  /**
   * Play the subtle glass harmonic hover sound on Navbar links (ONLY if sound is ON)
   */
  public playNavbarHover(freq: number = 659.25) {
    if (!this.isEnabled) return;

    try {
      const ctx = this.initContext();
      if (ctx.state === 'suspended') return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // Audio not ready
    }
  }

  /**
   * Soft chime played once when turning sound ON
   */
  private playConfirmChime() {
    try {
      const ctx = this.initContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2); // G5

      gain.gain.setValueAtTime(0.09, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.42);
    } catch {
      // Audio not ready
    }
  }

  /**
   * Stop and mute all sounds
   */
  public stop() {
    this.isEnabled = false;
    if (this.ctx && this.ctx.state === 'running') {
      try {
        // Suspend context to guarantee complete silence
        this.ctx.suspend();
      } catch {
        // ignore
      }
    }
  }

  public getStatus(): boolean {
    return this.isEnabled;
  }
}

export const soundEngine = new SoundEngine();
