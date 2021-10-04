using System;

namespace aula10
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
               DESAFIO - Dados dois vetores, X e Y, cada com 3 palavras. Construa um terceiro vetor
               R com as 6 palavras. 
            */

            int tamanho = 3;

            String[] x = new string[tamanho];
            String[] y = new string[tamanho];
            String[] r = new string[x.Length + y.Length];

            Console.WriteLine("Vetor X:");
            for(int i=0; i<x.Length; i++)
            {
                Console.WriteLine($"Digite a {(i + 1)}° palavra:");
                x[i] = Console.ReadLine();
            }

            Console.WriteLine();

            Console.WriteLine("Vetor Y:");
            for (int i=0; i<y.Length; i++)
            {
                Console.WriteLine($"Digite a {(i + 1)}° palavra:");
                y[i] = Console.ReadLine();
            }

            Console.WriteLine();

            Console.WriteLine("Vetor R:");

            x.CopyTo(r, 0);
            y.CopyTo(r, x.Length);

            for (int i=0; i<r.Length; i++)
            {
                Console.Write($" {r[i]} |");
            }
        }
    }
}
