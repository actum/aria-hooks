export class ToolTipController {
  onOpen = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };
  onClose = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
  };
  handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      console.log('escape');
    }
  };
}
