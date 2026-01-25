import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CloudUpload, Paperclip, Plus } from "lucide-react"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldContent,
  FieldTitle,
  FieldDescription,
} from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FileUploader, FileUploaderContent, FileUploaderItem, FileInput } from "@/components/ui/file-upload"
import { useState } from "react"
import { shortenTxt } from "@/utils/shorten"

// Helper function to format number with commas
const formatNumberWithCommas = (value: string): string => {
  // Remove all non-numeric characters
  const numericValue = value.replace(/\D/g, '')
  if (!numericValue) return ''
  // Format with commas
  return parseInt(numericValue, 10).toLocaleString('en-US')
}

const addInventoryFormSchema = z.object({
  branch: z
    .string(),
  vehicleType: z
    .string(),
  vehicleModel: z
    .string(),
  vehicleColor: z
    .string(),
  vehicleVin: z
    .string(),
  vehiclePapers: z
    .string(),
  amount: z
    .string(),
})

export function AddInventory() {

  const [papers, setPapers] = useState <File[] | null> (null);

  const addInventoryForm = useForm({
    defaultValues: {
      branch: "",
      vehicleType: "",
      vehicleModel: "",
      vehicleColor: "",
      vehicleVin: "",
      vehiclePapers: "",
      amount: "",

    },
    validators: {
      onSubmit: addInventoryFormSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      })
    },
  })

  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">
                <Plus />
                Add Vehicle
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="mx-auto w-full max-w-sm pb-6">
          <DialogHeader>
            <DialogTitle>Add Vehicle</DialogTitle>
            <DialogDescription>
                Log a new vehicle arrival to the inventory.
            </DialogDescription>
          </DialogHeader>
            <div className="flex flex-col p-4">
              <form
                className="space-y-6"
                id="add-inventory-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  addInventoryForm.handleSubmit()
                }}
              >
                <FieldGroup>
                  <addInventoryForm.Field
                    name="branch"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <div className="flex flex-col gap-1 w-full max-w-sm space-x-2">
                          <FieldLabel htmlFor={field.name} className="text-primary">Branch</FieldLabel>
                              <Select>
                                <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a branch" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="kasoa">Kasoa</SelectItem>
                                    <SelectItem value="kumasi">Kumasi</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              {isInvalid && (
                                <FieldError errors={field.state.meta.errors} />
                              )}
                          </div>
                        </Field>
                      )
                    }}
                  />
                  <addInventoryForm.Field
                    name="vehicleType"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <div className="flex flex-col gap-1 w-full max-w-sm space-x-2">
                          <FieldLabel htmlFor={field.name} className="text-primary">Type</FieldLabel>
                          <RadioGroup className="max-w-full">
                            <FieldLabel htmlFor="plus-plan">
                              <Field orientation="horizontal">
                                <FieldContent>
                                  <FieldTitle>Motorcycle</FieldTitle>
                                </FieldContent>
                                <RadioGroupItem value="plus" id="plus-plan" />
                              </Field>
                            </FieldLabel>
                            <FieldLabel htmlFor="pro-plan">
                              <Field orientation="horizontal">
                                <FieldContent>
                                  <FieldTitle>Tricycle</FieldTitle>
                                </FieldContent>
                                <RadioGroupItem value="pro" id="pro-plan" />
                              </Field>
                            </FieldLabel>
                          </RadioGroup>
                              {isInvalid && (
                                <FieldError errors={field.state.meta.errors} />
                              )}
                          </div>
                        </Field>
                      )
                    }}
                  />
                  <addInventoryForm.Field
                    name="vehicleModel"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <div className="flex flex-col gap-1 w-full max-w-sm space-x-2">
                          <FieldLabel htmlFor={field.name} className="text-primary">Model</FieldLabel>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a vehicle model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Motorcycle Models</SelectLabel>
                                <SelectItem value="tvs-hlx-125-5g">TVS HLX 125 5G</SelectItem>
                                <SelectItem value="tvs-apache-rtr-200-4v">TVS Apache RTR 200 4V</SelectItem>
                              </SelectGroup>
                              <SelectSeparator />
                              <SelectGroup>
                                <SelectLabel>Tricycle Models</SelectLabel>
                                <SelectItem value="tvs-king-deluxe-plus">TVS King Deluxe Plus</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                              {isInvalid && (
                                <FieldError errors={field.state.meta.errors} />
                              )}
                          </div>
                        </Field>
                      )
                    }}
                  />
                  <addInventoryForm.Field
                    name="vehicleColor"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <div className="flex flex-col gap-1 w-full max-w-sm space-x-2">
                          <FieldLabel htmlFor={field.name} className="text-primary">Color</FieldLabel>
                              <Select>
                                <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a color" />
                                </SelectTrigger>
                                <SelectContent
                                  //position={alignItemWithTrigger ? "item-aligned" : "popper"}
                                >
                                  <SelectGroup>
                                    <SelectItem value="black">Black</SelectItem>
                                    <SelectItem value="red">Red</SelectItem>
                                    <SelectItem value="blue">Blue</SelectItem>
                                    <SelectItem value="green">Green</SelectItem>
                                    <SelectItem value="yellow">Yellow</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              {isInvalid && (
                                <FieldError errors={field.state.meta.errors} />
                              )}
                          </div>
                        </Field>
                      )
                    }}
                  />
                  <addInventoryForm.Field
                    name="vehicleVin"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <div className="flex flex-col gap-1 w-full max-w-sm space-x-2">
                          <FieldLabel htmlFor={field.name} className="text-primary">Vin</FieldLabel>
                              <Input
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                aria-invalid={isInvalid}
                                placeholder="MD6M14PA2R4NO1944"
                                autoComplete="off"
                              />
                              {isInvalid && (
                                <FieldError errors={field.state.meta.errors} />
                              )}
                          </div>
                        </Field>
                      )
                    }}
                  />
                  <addInventoryForm.Field
                    name="vehiclePapers"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <div className="flex flex-col gap-1 w-full max-w-sm space-x-2">
                          <FieldLabel htmlFor={field.name} className="text-primary">Papers</FieldLabel>
                              <FileUploader
                                  value={papers}
                                  onValueChange={setPapers}
                                  dropzoneOptions={{
                                      maxFiles: 4,
                                      maxSize: 1024 * 1024 * 4,
                                      multiple: true,
                                      accept: {
                                          "application/*": [".pdf"],
                                      },
                                  }}
                                  className="relative bg-background rounded-lg p-2"
                              >
                                  <FileInput
                                      id="national-fileInput"
                                      className="outline-dashed outline-1 outline-slate-500"
                                  >
                                      <div className="flex items-center justify-center flex-col py-2 w-full ">
                                          <CloudUpload className='text-gray-500 w-10 h-10' />
                                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                              <span className="font-semibold">Click to upload </span>
                                              or drag and drop
                                          </p>
                                          <p className="text-xs text-gray-500 dark:text-gray-400">
                                              PDF
                                          </p>
                                      </div>
                                  </FileInput>
                                  <FileUploaderContent>
                                      {papers &&
                                          papers.length > 0 &&
                                          papers.map((file, i) => (
                                              <FileUploaderItem key={i} index={i}>
                                                  <Paperclip className="h-4 w-4 stroke-current" />
                                                  <span>{shortenTxt(file.name)}</span>
                                              </FileUploaderItem>
                                          ))}
                                  </FileUploaderContent>
                              </FileUploader>
                              {isInvalid && (
                                <FieldError errors={field.state.meta.errors} />
                              )}
                          </div>
                        </Field>
                      )
                    }}
                  />
                  <addInventoryForm.Field
                    name="amount"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <div className="flex flex-col gap-1 w-full max-w-sm space-x-2">
                          <FieldLabel htmlFor={field.name} className="text-primary">Amount</FieldLabel>
                              <Input
                                id={field.name}
                                name={field.name}
                                value={field.state.value ? formatNumberWithCommas(field.state.value) : ''}
                                onBlur={field.handleBlur}
                                onChange={(e) => {
                                  // Remove all non-numeric characters
                                  const rawValue = e.target.value.replace(/\D/g, '')
                                  // Store raw numeric value (without commas) in form state
                                  field.handleChange(rawValue)
                                }}
                                aria-invalid={isInvalid}
                                placeholder="40,000"
                                autoComplete="off"
                                type="text"
                                inputMode="numeric"
                              />
                              {isInvalid && (
                                <FieldError errors={field.state.meta.errors} />
                              )}
                          </div>
                        </Field>
                      )
                    }}
                  />
                  
                </FieldGroup>
                <Field orientation="horizontal" className="flex justify-end gap-2 mt-12">
                  <Button type="button" variant="outline" onClick={() => addInventoryForm.reset()}>
                    Reset
                  </Button>
                  <Button type="submit" form="add-inventory-form">
                    Submit
                  </Button>
                </Field>
              </form>
              
          </div>
          </div>
          
        </DialogContent>
    </Dialog>
  )
}
