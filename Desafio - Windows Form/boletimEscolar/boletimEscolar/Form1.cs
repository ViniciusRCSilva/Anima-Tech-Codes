using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace boletimEscolar
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string nome, turno, curso, turma, situacao;
            string nota1, nota2, nota3, nota4, media;

            nome = textBox2.Text;
            turno = textBox4.Text;
            curso = textBox1.Text;
            turma = textBox3.Text;

            nota1 = textBox6.Text;
            nota2 = textBox5.Text;
            nota3 = textBox8.Text;
            nota4 = textBox7.Text;

            float n1, n2, n3, n4, m;

            n1 = float.Parse(nota1);
            n2 = float.Parse(nota2);
            n3 = float.Parse(nota3);
            n4 = float.Parse(nota4);

            m = (n1 + n2 + n3 + n4) / 4;

            if(m >= 7.00)
            {
                situacao = "Aprovado!";
            } else
            {
                situacao = "Reprovado!";
            }

            media = string.Format("{0:N2}", m);

            label9.Text = label9.Text + "Nome: " + nome + "\n" + "Curso: " + curso + "\n" + "Turno: " + turno + "\n" + "Turma: " + turma;
            label10.Text = label10.Text + media;
            label11.Text = label11.Text + situacao;
        }

        private void button2_Click(object sender, EventArgs e)
        {
            textBox1.Text = " ";
            textBox2.Text = " ";
            textBox3.Text = " ";
            textBox4.Text = " ";
            textBox5.Text = " ";
            textBox6.Text = " ";
            textBox7.Text = " ";
            textBox8.Text = " ";
            label9.Text = " ";
            label10.Text = " ";
            label11.Text = " ";
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
