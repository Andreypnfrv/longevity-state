import {
  PolicyGroup,
  TalentsField, ScienceField, TranslationField, HealthcareField, DataField, InternationalField, SocietalField,
  type CountryData, type ClaimData,
} from './index'

export type AnyField =
  | TalentsField | ScienceField | TranslationField
  | HealthcareField | DataField | InternationalField | SocietalField

export interface GroupDef {
  group: PolicyGroup
  fields: AnyField[]
  accessor: (c: CountryData) => Record<string, Record<string, ClaimData>>
}

export const GROUPS: GroupDef[] = [
  { group: PolicyGroup.TALENTS,       fields: Object.values(TalentsField),       accessor: c => c.talents as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.SCIENCE,       fields: Object.values(ScienceField),       accessor: c => c.science as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.TRANSLATION,   fields: Object.values(TranslationField),   accessor: c => c.translation as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.HEALTHCARE,    fields: Object.values(HealthcareField),    accessor: c => c.healthcare as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.DATA,          fields: Object.values(DataField),          accessor: c => c.data as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.INTERNATIONAL, fields: Object.values(InternationalField), accessor: c => c.international as Record<string, Record<string, ClaimData>> },
  { group: PolicyGroup.SOCIETAL,      fields: Object.values(SocietalField),      accessor: c => c.societal as Record<string, Record<string, ClaimData>> },
]
