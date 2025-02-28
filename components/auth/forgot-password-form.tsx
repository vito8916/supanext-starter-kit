'use client';

import React, {useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import InputError from "@/components/input-error";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {LoaderCircle} from "lucide-react";
import {ForgotPasswordFormValues, forgotPasswordSchema} from "@/lib/validations/auth";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const ForgotPasswordForm = () => {

    const [messageError, setMessageError] = useState("");

    const form = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (data: ForgotPasswordFormValues) => {
        try {
            // Handle sign in logic here
            const formData = new FormData();
            formData.append("email", data.email);
            console.log(formData);
        } catch (error) {
            console.error(error);
        }
    };

    const {isSubmitting} = form.formState;
    return (
        <Card className="rounded-xl">
            <CardHeader className="px-10 pt-8 pb-0 text-center">
                <CardTitle className="text-xl">Forgot password</CardTitle>
                <CardDescription>Enter your email to receive a password reset link</CardDescription>
            </CardHeader>
            <CardContent className="px-10 py-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your email" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <InputError message={messageError}/>
                            </div>

                            <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={isSubmitting}>
                                {isSubmitting && <LoaderCircle className="h-4 w-4 animate-spin"/>}
                                Log in
                            </Button>
                        </div>

                        <div className="text-muted-foreground text-center text-sm">
                            You have an account?{' '}
                            <Link href={"/sign-in"} tabIndex={5}>
                                Sign in
                            </Link>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default ForgotPasswordForm;