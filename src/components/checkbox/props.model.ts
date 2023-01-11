export interface Props {
  isChecked?: boolean;
  label?: string;
  functionAction: <T>(args?: T) => unknown;
}
