'use client';

import { UnsplashImage } from '@/app/models/unsplash-image';
import { ProfileForm } from '@/components/client/Form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// const { data, isLoading, error } = useQuery({
//   queryKey: ['koentji'],
//   queryFn: () => fetch(`/api/search?query=makan`),
// });
// console.log({data});

const formSchema = z.object({
  query: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
});

export default function SearchPage() {
  const [searchResults, setsearchResults] = useState<UnsplashImage[] | null>(null);
  const [searchResultsLoading, setsearchResultsLoading] = useState(false);
  const [searchResultsError, setsearchResultsError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: '',
    },
  });

  function onSubmit(e: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    if (e) {
      alert('asda');
    }
  }

  // async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target as HTMLFormElement);
  //   const query = formData.get('query')?.toString().trim();

  //   if (query) {
  //     alert(query);
  //   }
  // }

  return (
    <div>
      <div className="w-full max-w-5xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Search Qeury</FormLabel>
                  <FormControl>
                    <Input placeholder="query ..." {...field} />
                  </FormControl>
                  <FormDescription>Show your query result</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
