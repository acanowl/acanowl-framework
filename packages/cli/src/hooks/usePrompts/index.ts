import prompts, { PromptObject } from 'prompts'

type PromptOptionType = PromptObject<string>

export const usePrompts = async (option: PromptOptionType | PromptOptionType[]) => {
  const result = await prompts(option)
  return Array.isArray(option) ? result : result[option.name as keyof typeof result]
}

type DefaultPromptsType = Omit<Omit<PromptOptionType, 'name'>, 'type'>

export const useInputPrompts = (options: DefaultPromptsType) =>
  usePrompts({ ...options, name: 'inputKey', type: 'text' })

export const useCheckboxPrompts = (options: DefaultPromptsType) =>
  usePrompts({ ...options, name: 'checkboxKey', type: 'multiselect' })

export const useConfirmPrompts = (options: DefaultPromptsType) =>
  usePrompts({ ...options, name: 'confirmKey', type: 'confirm' })
