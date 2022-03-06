export interface FlyoutOption {
  label: string;
  value: string;
}

export interface FlyoutSelectProps {
  /**
   * @en open the flyout component
   * @required
   */
  visible: boolean;
  /**
   * @en callback called to update the show prop to false
   * @required
   */
  onHideVisibility: () => void;
  /**
   * @en callback called for onChange event
   */
  onSelect?: (
    event: React.KeyboardEvent<HTMLLIElement> | React.MouseEvent<HTMLLIElement>,
    value: string
  ) => void;

  /**
   * @en list items to render inside menu
   * @required
   */
  options: FlyoutOption[];

  /**
   * @en Value selected
   */
  value?: string;
  /**
   * @en An optional class name applied to the wrapper of the flyout select component.
   */
  className?: string;
}
