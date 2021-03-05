export default () => ({
  visible: false,
  loading: false,
  async submit() {
    this.loading = true;
    try {
      const res = await Promise.resolve();
      this.visible = false;
    } catch {
    } finally {
      this.loading = false;
    }
  },
});
